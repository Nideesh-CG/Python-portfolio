export interface PortfolioConfig {
  personal: {
    name: string;
    brand: string;
    course: string;
    courseCode: string;
    regNo: string;
    program: string;
    institution: string;
    tagline: string;
    bio: string;
  };
  assets: {
    storyboard: string;
    pythonDiscussion: string;
    pythonDiscussionReport: string;
    classQuiz: string;
    impairmentArchitecture: string;
    padlet: string;
    eWasteWriteup: string;
    eWastePresentation: string;
    pythonProjectVideo: string;
    videoThumbnail: string;
  };
  links: {
    mediumBlog: string;
    githubProfile: string;
    eWasteRepository: string;
    audioRecordingWebsite: string;
    eWasteLiveApp: string;
    audioRecordingLiveApp: string;
    audioRecordingPresentation: string;
    audioRecordingVideo: string;
  };
  analytics: {
    visualCapitalistSource: string;
    dataset: string;
    cleanedDataset: string;
    excelWorkbook: string;
    pythonScript: string;
    notebook: string;
    charts: string[];
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "NIDEESH C G",
    brand: "PYTHONVERSE",
    course: "Advanced Python Programming",
    courseCode: "CSI3007",
    regNo: "23MIC0092",
    program: "Integrated M.Tech Computer Science and Engineering (Data Science)",
    institution: "SCOPE, Vellore Institute of Technology",
    tagline: "Learning Through Code. Innovating Through Technology. Building for Impact.",
    bio: "Welcome to PYTHONVERSE – a digital journey through my Advanced Python Programming course, showcasing classroom experiences, programming assessments, analytical exercises, accessibility-focused innovation and real-world software development."
  },

  assets: {
    storyboard: "/assets/Storyboard.png",
    pythonDiscussion: "/assets/python-tutorial-group-discussion.jpeg",
    pythonDiscussionReport: "/assets/python-discussion-report.pdf",
    classQuiz: "/assets/class-quiz.jpeg",
    impairmentArchitecture: "/assets/impairment.jpeg",
    padlet: "/assets/padlet.png",
    eWasteWriteup: "/assets/e-waste-project-writeup.pdf",
    eWastePresentation: "/assets/e-waste-presentation.pptx",
    pythonProjectVideo: "/assets/python-project-video-compressed.mp4",
    videoThumbnail: "/assets/video-thumbnail.jpg"
  },

  links: {
    // MEDIUM ARTICLE
    mediumBlog: "https://medium.com/@nidninja10/everyone-deserves-to-code-making-python-accessible-to-braille-learners-ade82b348912",

    // GITHUB PROFILE
    githubProfile: "https://github.com/Nideesh-CG",

    // E-WASTE REPOSITORY
    eWasteRepository: "https://github.com/Nideesh-CG/E-waste-Recovery-System.git",

    // AUDIO RECORDING WEBSITE [ BUSINESS THESIS]
    audioRecordingWebsite: "https://drive.google.com/file/d/1Go9ogc3-RV4LjE77__FKC-MJiog7Rfq-/view?usp=sharing",

    // E-WASTE LIVE APPLICATION LINK
    eWasteLiveApp: "https://e-waste-recovery-system-sand.vercel.app/",

    // Unprovided external links left as empty strings
    audioRecordingLiveApp: "",
    audioRecordingPresentation: "",
    audioRecordingVideo: ""
  },

  analytics: {
    visualCapitalistSource: "https://www.visualcapitalist.com/ranked-the-worlds-cities-with-the-most-tree-coverage/",
    dataset: "/assets/pivot-table/urban_tree_coverage_data.csv",
    cleanedDataset: "/assets/pivot-table/urban_tree_coverage_cleaned.csv",
    excelWorkbook: "/assets/pivot-table/Urban_Tree_Coverage_Pivot_Analysis.xlsx",
    pythonScript: "/assets/pivot-table/urban_tree_coverage_analysis.py",
    notebook: "/assets/pivot-table/urban_tree_coverage_pivot.ipynb",
    charts: [
      "/assets/pivot-table/urban_tree_coverage_summary.png",
      "/assets/pivot-table/urban_tree_coverage_distribution.png",
      "/assets/pivot-table/urban_tree_coverage_continents.png"
    ]
  }
};

