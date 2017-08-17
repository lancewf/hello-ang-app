export interface BillType {
  key:number;
  name:string;
  description: string;
}

export interface Purchase {
  storeName: string;
  cost: number;
  billTypeId: number;
  notes: string;
}

export interface ViewDetail {
  age: number;
  region: string; 
  date: Date;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}
