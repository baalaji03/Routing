import Card from "./Card";


function DataScience() {
  let dsContent = [
    {
      id: 1,
      title:
        "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      date: '28 November 2023',
      comment : 'No Comments'
    },
    {
      id: 2,
      title: "10 Best Data Science Frameworks in 2024",
      description:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
      date: '5 August 2023',
      comment : 'No Comments'
    },
    {
      id: 3,
      title: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      date: '10 November 2023',
      comment : 'No Comments'
    },
    {
      id: 4,
      title:
        "What is the Difference between Data Science and Data Engineering?",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      date: '8 November 2023 ',
      comment : 'No Comments'
    },
    {
      id: 5,
      title:
        "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      description:
        "Data science has become one of the most sought-after skills in the current job market.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/must-watch-data-science-focused-youtube-channels-1536x804.webp",
      date: '5 August 2023',
      comment : 'No Comments'
    },
    {
      id: 6,
      title:
        "Best Data Science Books to Learn in 2024",
      description:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      date: '26 October 2023',
      comment : 'No Comments'
    },
    {
      id: 7,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      date: '5 October 2023',
      comment : 'No Comments'
    },
    {
      id: 8,
      title:
        "Useful Python Libraries & Tools for Data Science Beginners",
      description:
        "In a world filled with information, knowing how to understand and use data is super",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
      date: '29 September 2023 ',
      comment : 'No Comments'
    },
    {
      id: 9,
      title: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      date: '28 August 2023',
      comment : 'No Comments'
    },
    {
      id: 10,
      title: "Future of Data Science and How You Can Thrive With It",
      description:
        "Data Science has emerged as a revolutionary field in the technology world, transforming the",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: '28 August 2023',
      comment : 'No Comments'
    },
    {
      id: 11,
      title: "10 Best Data Science Online Courses for Beginners | 2024",
      description:
        "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      date: '14 August 2023',
      comment : 'No Comments'
    },
    {
      id: 12,
      title: "Data Science Webinars and Workshops",
      description:
        "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp",
      date: '9 August 2023',
      comment : 'No Comments'
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5">
          {dsContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default DataScience