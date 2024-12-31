// this file contains all the main logic/functionality of the urlShortner

import express from "express";
// importing the urlModel (database)
import { urlModel } from "../model/shortUrl";

export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    // extracts fullUrl field from body of the req
    console.log("The fullUrl is: ", req.body.fullUrl);

    // this is called destructuring, body has the attribute fullUrl
    // instead of doing
    // fullUrl = req.body.fullUrl, the below achieves the same
    const { fullUrl } = req.body;

    // searches for the fullUrl in the fullUrl field and returns all the matches, urlFound is going to be an array
    // this urlFound consists of the entire object, and not just the corresponding shortUrl of the fullUrl
    const urlFound = await urlModel.find({ fullUrl: fullUrl });
    if (urlFound.length > 0) {
      // the resposne sends http status 409 which means 'conflict'
      res.status(409);
      // returning the entire object to the frontend
      res.send(urlFound);
    } else {
      const shortUrl = await urlModel.create({ fullUrl: fullUrl });
      // status 201 means object created
      res.status(201).send(shortUrl);
    }
  } catch (error) {
    // status 500 means internal server error
    res.status(500).send({ message: "Something went wrong" });
  }
};

export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    // empty find parameter returns all the objects in the database
    // shortUrls is now an array containing all the document objects
    const shortUrls = await urlModel.find().sort({ createdAt: -1 });
    if (shortUrls.length === 0) {
      // status 204 means No Content
      res.status(204).send({ message: "Short Urls not found!" });
    } else {
      // status 200 means OK
      res.status(200).send(shortUrls);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
  try {
    // this get req is sent when the user goes to the shortUrl
    // shortUrl is the whole object where the Shorturl is the shorturl passed
    const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
    if (!shortUrl) {
      // status 404 means Not Found
      res.status(404).send({ message: "Full Url not found!" });
    } else {
      shortUrl.clicks++;
      shortUrl.save();
      // upon clicking the shotUrl, it redirects to the fullUrl
      res.redirect(`${shortUrl.fullUrl}`);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shortUrl = await urlModel.findByIdAndDelete(req.params.id);
    if (shortUrl) {
      res.status(200).send({ message: "Requested Url successfully deleted" });
    } else {
      res
        .status(404)
        .send({ message: "The Url you want to delete does not exist" });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};
