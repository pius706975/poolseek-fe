export interface RefreshTokenResponse {
    data: {
      accessToken: string;
      refreshToken?: string;
    };
  }
  
export interface UserSession {}