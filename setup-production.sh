#!/bin/bash

echo "🚀 Setting up production environment..."

# Kill any existing processes on port 3000
echo "📋 Checking for existing processes on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Create prisma directory in output
echo "📁 Creating prisma directory..."
mkdir -p .output/server/prisma

# Copy database file
echo "💾 Copying database file..."
cp prisma/dev.db .output/server/prisma/dev.db

# Copy schema file for reference
echo "📄 Copying schema file..."
cp prisma/schema.prisma .output/server/prisma/schema.prisma

# Copy migrations directory
echo "🔄 Copying migrations..."
cp -r prisma/migrations .output/server/prisma/ 2>/dev/null || true

# Create .env file for production
echo "🔧 Setting up environment variables..."
CURRENT_DIR=$(pwd)
cat > .output/server/.env << EOF
DATABASE_URL="file:${CURRENT_DIR}/.output/server/prisma/dev.db"
EOF

# Verify database has tables
echo "🔍 Checking database tables..."
TABLE_COUNT=$(sqlite3 .output/server/prisma/dev.db "SELECT count(*) FROM sqlite_master WHERE type='table' AND name='Translation';" 2>/dev/null || echo "0")

if [ "$TABLE_COUNT" -eq "0" ]; then
    echo "❌ Translation table not found. Setting up database..."
    
    # Change to output directory for Prisma operations
    cd .output/server
    
    # Generate Prisma client for production
    echo "🔧 Generating Prisma client..."
    npx prisma generate --schema=./prisma/schema.prisma
    
    # Run migrations to create tables
    echo "🏗️ Running database migrations..."
    npx prisma migrate deploy --schema=./prisma/schema.prisma
    
    # Go back to root directory
    cd ../..
else
    echo "✅ Database tables found."
fi

# Final verification
echo "🔍 Final database verification..."
FINAL_COUNT=$(sqlite3 .output/server/prisma/dev.db "SELECT count(*) FROM sqlite_master WHERE type='table' AND name='Translation';" 2>/dev/null || echo "0")

if [ "$FINAL_COUNT" -eq "0" ]; then
    echo "❌ Database setup failed. Attempting alternative setup..."
    
    # Alternative: Use development database directly
    rm -f .output/server/prisma/dev.db
    cp prisma/dev.db .output/server/prisma/dev.db
    
    # Verify again
    ALT_COUNT=$(sqlite3 .output/server/prisma/dev.db "SELECT count(*) FROM sqlite_master WHERE type='table' AND name='Translation';" 2>/dev/null || echo "0")
    
    if [ "$ALT_COUNT" -eq "0" ]; then
        echo "❌ Critical error: Cannot set up database. Exiting."
        exit 1
    else
        echo "✅ Alternative database setup successful."
    fi
else
    echo "✅ Database setup verified."
fi

# echo "🎯 Starting production server..."
# cd .output/server && node index.mjs
cd .output/server
pm2 delete nuxt-app >/dev/null 2>&1 || true
pm2 start index.mjs --name nuxt-app
pm2 save

