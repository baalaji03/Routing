import Card from "./Card";


function Career() {
  let careerContent = [
    {
      id: 1,
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      date: '19 January 2024',
      comment : 'No Comments'
    },
    {
      id: 2,
      title: "Best 11 Product-Based Companies for Product Managers in India ",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      date: '14 November 2023',
      comment : 'No Comments'
    },
    {
      id: 3,
      title: "Top 5 IT Jobs for Economics Students",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      date: '4 December 2023 ',
      comment : 'No Comments'
    },
    {
      id: 4,
      title:
        "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      date: '2 December 2023',
      comment : 'No Comments'
    },
    {
      id: 5,
      title:
        "Automation Test Engineer Resume: 10 Important Things To Consider",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      date: '1 December 2023',
      comment : 'No Comments'
    },
    {
      id: 6,
      title:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      description:
        "The world is moving towards modernization leading to an increase in the popularity of civil",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-1536x804.webp",
      date: '1 December 2023',
      comment : 'No Comments'
    },
    {
      id: 7,
      title: "9 Best Product-Based Companies for Project Management",
      description:
        "In today’s tech-driven world, the demand for project managers is higher than before. The workload",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-1536x804.webp",
      date: '1 December 2023',
      comment : 'No Comments'
    },
    {
      id: 8,
      title:
        "Top 5 Product-Based Companies That Don’t Require Coding",
      description:
        "Every one of us wants to work in top product-based companies, Right? But, Not everyone",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
      date: '24 November 2023',
      comment : 'No Comments'
    },
    {
      id: 9,
      title: "Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
      description:
        "The current technological era is full of competition and those who have profound skillset are",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
      date: '23 November 2023',
      comment : 'No Comments'
    },
    {
      id: 10,
      title: "Mechanical Engineering Resume: 9 Important Things To Look Out For",
      description:
        "With the development of technology, most of us started forgetting about mechanical engineering which pioneered",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp",
      date: '22 November 2023',
      comment : 'No Comments'
    },
    {
      id: 11,
      title: "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      description:
        "What if I say that blockchain is going to be the next big thing? And",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-1536x804.webp",
      date: '22 November 2023',
      comment : 'No Comments'
    },
    {
      id: 12,
      title: "A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow",
      description:
        "With the growing concerns of digital security increasing day by day, organizations turn to ethical",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/1-1536x804.webp",
      date: '22 November 2023',
      comment : 'No Comments'
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {careerContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Career