import axios from "axios";
// REASON WHY KEY IS ALL CAPS IS BECAUSE IT NEVER CHANGES
const KEY = "AIzaSyC4T8wtGwC_vlehxsK-_pZ5Yw4VhJvepj0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
