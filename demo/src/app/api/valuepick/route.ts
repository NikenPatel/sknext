import axios from "axios";

export const maxDuration = 30000;
export async function GET() {

    const apiKey = 'hVEHS3F4B9GVNh7Ih9rgP7cswaHscarr';
    const headers = {
      'Content-Type': 'application/json',
      'apiKey': apiKey,
    };
    const url = "https://widgets.sportsdatagenie.com/api/v2/valuepicks?startDate=2024-04-23T06%3A14%3A04.977Z&endDate=2024-04-30T23%3A59%3A59.999Z&popular=false"
    const {data} = await axios.get(url, { headers })
   
    return Response.json({ data })
  }