export interface BlogData {
  id: number;
  image: string;
  title: string;
  description: string;
  data: string;
}

  export const BLOG_DATA: BlogData[] = [
      {
          id: 0,
          image: "https://media.discordapp.net/attachments/905837522813337613/1077060272751132742/Post1.png",
          title: "More productive with an atmosphere of greenery",
          description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
          data: "January 10, 2023"
      },
      {
          id: 1,
          image: "https://media.discordapp.net/attachments/905837522813337613/1077060273006972938/Post2.png",
          title: "The benefits of plants in your room",
          description: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being...",
          data: "January 20, 2023"
      },
      {
          id: 2,
          image: "https://media.discordapp.net/attachments/905837522813337613/1077060272541405355/Post3.png",
          title: "Hobbyist plants in the house",
          description: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
          data: "January 28, 2023"
      },
  ];