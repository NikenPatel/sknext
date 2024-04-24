import axios from "axios";

export const maxDuration = 30000;
export async function GET() {

    const apiKey = 'hVEHS3F4B9GVNh7Ih9rgP7cswaHscarr';
    const headers = {
      'Content-Type': 'application/json',
      'apiKey': apiKey,
    };
    const url = "https://widgets.sportsdatagenie.com/api/v1/filters/valuegrade"
    const {data} = await axios.get(url, { headers })
   
    return Response.json({ data })
  }