import conf from "../conf/conf";
import{ Client, ID, Databases, Storage, Query } from "appwrite";

export class Serviece{
    client =new Client();
    Databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appweiteUrl)
            .setProject(conf.appweiteProjectId);
            this.Databases=new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async createPost({title,slug, content, featureimage, status, userId}){
        try {
            return await this.Databases.createDocument(
                conf.appweiteBucketId,
                conf.appweiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureimage,
                    userId,
                    status,
                }
            )
        } catch (error) {
            console.log("createPost error: " + error);
        }
    }

    async updatePost(slug, {title, content, featureimage, status}){

        try {
            return await this.Databases.updateDocument(
                conf.appweiteBucketId,
                conf.appweiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureimage,
                    status,
                }
            )
        } catch (error) {
            console.log("updatePost error: " + error);
        }
    }

  async deletePost(slug){
    try {
        await this.Databases.deleteDocument(
            conf.appweiteBucketId,
            conf.appweiteCollectionId,
            slug,
        )
        
        return true;

    } catch (error) {
        console.log("deletePost"+ error);
        return false;
    }
  }

  async getPost(slug){
    try {
        return await this.Databases.getDocument(
            conf.appweiteBucketId,
            conf.appweiteCollectionId,
            slug,
        )
    } catch (error) {
        console.log("getPost"+ error);
    }
  }

  async getPosts(queris=Query.equal("status", "active")){
    try {

        return await this.Databases.listDocuments(
            conf.appweiteBucketId,
            conf.appweiteCollectionId,
            queris,
        )
    } catch (error) {
        console.log("getPosts"+ error);
        return false;
    }
  }

  // file upload services

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appweiteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("uploadFile"+ error);
    }
  }

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appweiteBucketId,
            fileId,
        )

    } catch (error) {
        console.log("deleteFile"+ error);
        return false;
    }
  }

  getFilePriview (fileId){
    return this.bucket.getFilePriview(
        conf.appweiteBucketId,
        fileId,
    )
  }

}

const serviece = new Serviece();

export default serviece

