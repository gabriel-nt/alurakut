import { SiteClient } from 'datocms-client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getRequest(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'POST') {
    const client = new SiteClient('3ad544f54f76c94a2c8e56d1a3a195');

    const record = await client.items.create({
      itemType: '972880',
      ...request.body,
    });

    return response.json({
      data: record,
    });
  }

  return response.status(404).json({
    message: 'Method POST is forbidden',
  });
}
