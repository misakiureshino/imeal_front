import { api } from "./api";
import { REVIEWS_URL } from "./apiUrl";
import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";
import { ReviewFormData } from "@/app/_interfaces/dto/request/ReviewFormData";
import { mockReviews } from "@/___tests___/mocks/data";

// 口コミ取得APIリクエスト
export const getReviews = async (baseId?: number, limit?: number, sort?: string): Promise<ReviewData[]> => {
  try{
    return mockReviews;
    const response = await api.get<ReviewData[]>(REVIEWS_URL.GET(baseId, limit, sort));
    return response.data;
  }catch(error){
    throw error;
  }
};

// 口コミ削除APIリクエスト
export const deleteReview = async (reviewId: number): Promise<void> => {
  try{
    const response = await api.delete(REVIEWS_URL.DELETE(reviewId));
  }catch(error){
    throw error;
  }
};

//口コミ投稿APIリクエスト
export const createReview = async (reviewForm: ReviewFormData): Promise<ReviewData> =>{
  try{
    const response = await api.post<ReviewData>(REVIEWS_URL.CREATE , reviewForm);
    return response.data;
  } catch (error) { 
    throw error;
  }
};