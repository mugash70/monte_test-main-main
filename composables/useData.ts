import { ref } from 'vue'

export const useData = () => {
  const data = ref([

    {
      image: '/media/media1.png',
      descriptionKey: 'media.picture.description1',
    },
    {
      image: '/media/media2.jpg',
      descriptionKey: 'media.picture.description2',
    },
    {
      image: '/media/media3.jpg',
      descriptionKey: 'media.picture.description3',
    },
    {
      image: '/media/media4.jpg',
      descriptionKey: 'media.picture.description4',
    },
    {
      image: '/media/media5.jpg',
      descriptionKey: 'media.picture.description5',
    },
    {
      image: '/media/media6.jpg',
      descriptionKey: 'media.picture.description6',
    },
    {
      image: '/media/media7.jpg',
      descriptionKey: 'media.picture.description7',
    },
    {
      image: '/media/media8.jpg',
      descriptionKey: 'media.picture.description8',
    },
    {
      image: '/media/media9.jpg',
      descriptionKey: 'media.picture.description9',
    }


  ])
  return { data }
}




