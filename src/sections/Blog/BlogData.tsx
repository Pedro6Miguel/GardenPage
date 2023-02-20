export interface BlogData {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

  export const BLOG_DATA: BlogData[] = [
      {
          id: 0,
          image: "https://i.ibb.co/DVnhbgt/Post1-2-35.jpg",
          title: "More productive with an atmosphere of greenery",
          description: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
          date : "January 10, 2023"
      },
      {
          id: 1,
          image: "https://i.ibb.co/Jt8v2C2/Post2-35.jpg",
          title: "The benefits of plants in your room",
          description: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being...",
          date: "January 20, 2023"
      },
      {
          id: 2,
          image: "https://i.ibb.co/Nn9j6bK/Post3-35.jpg",
          title: "Hobbyist plants in the house",
          description: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
          date: "January 28, 2023"
      },
  ];