import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { result } from "lodash-es";
import { ServiceProxy } from "../../shared/service-proxy";


type InitialStateMyAccount = {
    loading: boolean,
    personalInfo:any,
    changePasswordData:any,
    profilePicture:any,
    twoFactor:boolean,
    error:string
};

 export const initialStateMyAccount:InitialStateMyAccount={
    loading:false,
    personalInfo:null,
    changePasswordData:null,
    profilePicture:null,
    twoFactor:false,
    error:""
 }

  const myAccountService=new ServiceProxy();

  export const fetchMyProfile = createAsyncThunk(
    "myProfile/fetchMyProfile",()=>{
    return myAccountService.myProfileGET(undefined).then((result:any)=>{
        return result;
    })
    }
  )
  

  export const saveMyProfile = createAsyncThunk(
    "myProfile/saveMyProfile",(data:any)=>{
    return myAccountService.myProfilePUT(data).then((result:any)=>{
        return result;
    })
    }
  )

  export const sendEmailVerifyProfile = createAsyncThunk(
    "myProfile/sendEmailVerifyProfile",(data:any)=>{
    return myAccountService.sendEmailConfirmationToken(data).then((result:any)=>{
        return result;
    })
    }
  )

  export const changepasswordProfile = createAsyncThunk(
    "myProfile/changepasswordProfile",(data:any)=>{
    return myAccountService.changePasswordPOST(data).then((result:any)=>{
        return result;
    })
    }
  )

  export const setProfilePicture = createAsyncThunk(   
    "myProfile/setProfilePicture",(data:any)=>{
    return myAccountService.profilePicturePOST(0,data?.imageContent).then((result:any)=>{
        console.log("result",data)
        return result;
        
    })
    }
  )

  export const setTwoFactorEnabled = createAsyncThunk(   
    "myProfile/setTwoFactorEnabled",(data:any)=>{
    return myAccountService.setTwoFactorEnabled(data?.enabled).then((result:any)=>{
        console.log("result",data)
        return result;
        
    })
    }
  )

  const myAccount = createSlice({
    name: "myAccount",
    initialState: initialStateMyAccount,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(saveMyProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        saveMyProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.personalInfo= action.payload;
        }     
      );
      builder.addCase(saveMyProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(fetchMyProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        fetchMyProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.personalInfo= action.payload;
        }     
      );
      builder.addCase(fetchMyProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(sendEmailVerifyProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        sendEmailVerifyProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.personalInfo= action.payload;
        }     
      );
      builder.addCase(sendEmailVerifyProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(changepasswordProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        changepasswordProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.changePasswordData= action.payload;
        }     
      );
      builder.addCase(changepasswordProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(setProfilePicture.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        setProfilePicture.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.profilePicture= action.payload;
        }     
      );
      builder.addCase(setProfilePicture.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(setTwoFactorEnabled.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        setTwoFactorEnabled.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.twoFactor= action.payload;
        }     
      );
      builder.addCase(setTwoFactorEnabled.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   
    },
  });

  export default myAccount.reducer;
