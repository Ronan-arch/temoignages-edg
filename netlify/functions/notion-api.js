const fetch = require('node-fetch');

const NOTION_API_VERSION = '2022-06-28';

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { apiKey, databaseId, endpoint, method, data } = body;

    if (!apiKey || !endpoint) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required parameters' })
      };
    }

    // Build Notion API URL
    let notionUrl = `https://api.notion.com/v1${endpoint}`;
    
    // Replace {databaseId} placeholder if present
    if (databaseId) {
      notionUrl = notionUrl.replace('{databaseId}', databaseId);
    }

    const options = {
      method: method || 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': NOTION_API_VERSION,
        'Content-Type': 'application/json'
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(notionUrl, options);
    const responseData = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: responseData.message || 'Notion API error',
          details: responseData
        })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(responseData)
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.message,
        stack: error.stack 
      })
    };
  }
};
