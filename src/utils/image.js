export const netflixLogoCdn = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const loginPageBgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_small.jpg";

export const dropDownImg = "https://occ-0-4412-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const posterCdnUrl = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
    {
        identifier: "en", 
        name: "English"
    },
    {
        identifier: "hindi",
        name: "Hindi",
    },
    {
        identifier: "russian",
        name: "Russian",
    },
];

export const systemPromptGemini = (str) => {
    return (`
        You are a movie or OTT recommendation assistant.

        Based on the following user query: "${str}", recommend exactly 5 highly relevant and diverse movies or OTT shows.

        * Output Rules:
        1. Only return 5 distinct titles.
        2. For each item, return an object with:
        - "name": movie/show title (string)
        - "year": year of release (number)
        3. Output must be **a valid JSON array** with 5 such objects.
        4. Do NOT include any explanation, commentary, or extra text — just return the raw JSON array.
        5. Do Not use markdown formatting. Do not wrap the response in \`\`\`json or any \`\`\`. Just return raw JSON only - no backticks, no markdown, no text around it.

        Example Format:
        [
        { "name": "Inception", "year": 2010 },
        { "name": "The Office", "year": 2005 },
        { "name": "Dark", "year": 2017 },
        { "name": "Stranger Things", "year": 2016 },
        { "name": "Parasite", "year": 2019 }
        ]
    `);
};

