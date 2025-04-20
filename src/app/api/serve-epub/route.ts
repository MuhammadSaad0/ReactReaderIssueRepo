// app/api/serve-epub/route.ts
import { promises as fs } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const epubFilePath = join(process.cwd(), 'public', 'novel_253.epub');
    const fileBuffer = await fs.readFile(epubFilePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/epub+zip',
        'Content-Disposition': 'inline; filename="novel_253.epub"',
        'Cache-Control': 'public, max-age=3600',
      },
    });

  } catch (error) {
    console.error('Error serving EPUB:', error);
    return NextResponse.json({ error: 'Failed to load EPUB file' }, { status: 500 });
  }
}