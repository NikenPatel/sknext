import axios from "axios";

export const maxDuration = 30000;
export async function GET() {

    const apiKey = 'hVEHS3F4B9GVNh7Ih9rgP7cswaHscarr';
    const headers = {
      'Content-Type': 'application/json',
      'apiKey': apiKey,
    };
    const url = "https://widgets.sportsdatagenie.com/api/v1/pickcards?startDate=2024-04-22T13%3A44%3A09.650Z&endDate=2024-04-22T23%3A59%3A59.999Z&sort=%2BmatchTime%2C%2BleagueId"
    const {data} = await axios.get(url, { headers })
   
    return Response.json({ data })
  }