import axios from 'axios';
import fs from 'node:fs';

const cookieString = '_sl_lp=https%3A%2F%2Fwww.airlinesim.aero%2Fblog%2F2024%2F10%2F31%2Fhalloween-sale-2024%2F; _ga=GA1.1.540658481.1731172454; as-sid=fz7byyal7v8zziRMa7ZObezEdi3Ssikl_BfQKWQHhJgmOqeUuypbuV2OfZAIsUovx; JSESSIONID=node0qmsypgm38qpv180tbuo1f1i1e397132.node0; airlinesim-selectedEnterpriseId-free2=342; _ga_1YJZV0ENPC=GS1.1.1732135446.3.1.1732135583.0.0.0'
const cookies: string[] = cookieString.split('; ');

axios.get('https://free2.airlinesim.aero/action/enterprise/aircraftsType?id=17590', {headers:{Cookie:cookieString}}).then((response)=>{
    const data = response.data;
    fs.writeFileSync('./xd.html', data);
});