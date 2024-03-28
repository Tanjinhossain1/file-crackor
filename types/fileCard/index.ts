export interface Category {
    primary: {
      name: string;
      type: string;
    };
    subCategory: {
      name: string;
      type: string;
    };
  }
  
  export interface FileData {
    id:number;
    image: string;
    title: string;
    description: string;
    category: Category;
    totalDownload: number;
    rating: number;
    mbSize: number;
  }