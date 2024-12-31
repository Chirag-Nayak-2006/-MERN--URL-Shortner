// sets up the interface for how the data from the table is going to be
// this is going to be imported where ever we work with the table data
export interface urlData {
  _id: string;
  fullUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}
