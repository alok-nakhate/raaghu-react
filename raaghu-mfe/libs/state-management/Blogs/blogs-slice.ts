import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BlogAdminService } from "../../proxy/services/BlogAdminService";
import { BlogFeatureAdminService } from "../../proxy/services/BlogFeatureAdminService";

type InitialState = {
  loading: boolean;
  blogs: any;
  error: string;
  blogsFeature: any;
};

const initialState: InitialState = {
  loading: false,
  blogs: [],
  error: "",
  blogsFeature: null,
};

export const fetchBlogsData = createAsyncThunk("blogs/fetchBlogsData", () => {
  return BlogAdminService.getBlogs1({
    filter: undefined,
    sorting: undefined,
    skipCount: 0,
    maxResultCount: 5,
  }).then((result) => {
    return result.items;
  });
});

export const deleteBlogsData = createAsyncThunk(
  "blogs/deleteBlogsData",
  (id: any) => {
    return BlogAdminService.deleteBlogs({ id: id }).then((result) => {
      return result;
    });
  }
);

export const addBlogsData = createAsyncThunk(
  "blogs/addBlogsData",
  (data: any) => {
    return BlogAdminService.postBlogs({ requestBody: data }).then((result) => {
      return result;
    });
  }
);

export const editBlogsData = createAsyncThunk(
  "blogs/editBlogsData",
  ({ id, dto }: { id: any; dto: any }) => {
    return BlogAdminService.putBlogs({
      id: id,
      requestBody: dto,
    }).then((result) => {
      return result;
    });
  }
);

export const fetchFeaturesBlogs = createAsyncThunk(
  "blogs/fetchFeaturesBlogs",
  (id: any) => {
    return BlogFeatureAdminService.getBlogsFeatures({ blogId: id }).then(
      (result: any) => {
        return result;
      }
    );
  }
);

export const putBlogsFeatures = createAsyncThunk(
  "blogs/putBlogsFeatures",
  ({ id, dto }: { id: string; dto: any }) => {
    return BlogFeatureAdminService.putBlogsFeatures({
      blogId: id,
      requestBody: dto,
    }).then((result: any) => {
      return result;
    });
  }
);
const blogsSlice: any = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchBlogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchBlogsData.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(deleteBlogsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteBlogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = "";
      }
    );
    builder.addCase(deleteBlogsData.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(addBlogsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addBlogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = "";
      }
    );
    builder.addCase(addBlogsData.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(editBlogsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editBlogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogs = action.payload;
      }
    );
    builder.addCase(editBlogsData.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(fetchFeaturesBlogs.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchFeaturesBlogs.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogsFeature = action.payload;
      }
    );
    builder.addCase(fetchFeaturesBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default blogsSlice.reducer;
