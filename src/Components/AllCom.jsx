import Card from "./Card";

function AllCom() {
  let allContent = [
    {
      id: 1,
      title:
        "Top 9 Machine Learning Project Ideas For All Levels [with Source Code]",
      description:
        "Machine learning is a dynamic field that continues to shape the future of technology and",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Machine-Learning-Project-Ideas-For-All-Levels-with-Source-Code.webp",
      date: '30 January 2024',
      comment : 'No Comments'
    },
    {
      id: 2,
      title: "What is Color Symbolism: Color Meanings and Uses Explained",
      description:
        "Do you know why all sustainable brands have green as their primary brand color? Or",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-What-is-Color-Symbolism-Color-Meanings-and-Uses-Explained.webp",
      date: '30 January 2024',
      comment : 'No Comments'
    },
    {
      id: 3,
      title: "Design Thinking and Prototyping in UI/UX: A Comprehensive Guide",
      description:
        "Design thinking is a user-centric approach to problem-solving that emphasizes empathy and experimentation. It is",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 4,
      title:
        "Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions",
      description:
        "Augmented Reality (AR) is a tool that adds digital images and information to the real",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Integrating-Augmented-Reality-AR-into-User-Interfaces-Challenges-and-Solutions.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 5,
      title:
        "Human-Computer Interaction in UI/UX: A Comprehensive Guide on Effective Designing [2024]",
      description:
        "Believe it or not, approximately 52% of Indians have increased usage of digital devices in",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Human-Computer-Interaction-in-UIUX-A-Comprehensive-Guide-on-Effective-Designing-.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 6,
      title:
        "10 Important Things to Consider Before Joining Digital Marketing Course",
      description:
        "Digital marketing is an exceptionally dynamic field that keeps on evolving with the changing trends,",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Important-Things-to-Consider-Before-Joining-Digital-Marketing-Course.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 7,
      title: "15 Most Common SQL Queries with Examples",
      description:
        "SQL is a must-have skill for every developer or tech professional to handle large amounts",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Most-Common-SQL-Queries-with-Examples.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 8,
      title:
        "Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
      description:
        "Does waking up to the news of mass layoffs every morning make you anxious about",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 9,
      title: "Top 10 Cloud Computing Project Ideas [2024]",
      description:
        "Do you know? India ranks 3rd with over 608,000 cloud professionals and is set to become the",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Cloud-Computing-Project-Ideas.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 10,
      title: "15 Most Common SQL Queries with Examples",
      description:
        "SQL is a must-have skill for every developer or tech professional to handle large amounts",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-8.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 11,
      title: "Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
      description:
        "Does waking up to the news of mass layoffs every morning make you anxious about",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
    {
      id: 12,
      title: "What is Heuristic Evaluation? An Essential Guide [2024]",
      description:
        "Have you ever wondered why some websites feel effortlessly intuitive, while others leave you lost",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-What-is-Heuristic-Evaluation-An-Essential-Guide.webp",
      date: '29 January 2024',
      comment : 'No Comments'
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {allContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default AllCom;