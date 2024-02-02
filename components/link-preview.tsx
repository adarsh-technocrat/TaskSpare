import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

function LinkPreview({ url }: { url: string }) {
    const [previewData, setPreviewData] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.text();
                console.log(data)
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const title = doc.querySelector('title')?.textContent || '';
                const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
                const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

                setPreviewData({ title, description, image });
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!previewData) {
        return <p>Failed to fetch link preview.</p>;
    }

    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div onClick={handleClick} className='cursor-pointer relative mb-4'>
            <Card className='border-none relative overflow-hidden bg-white max-h-[250px]'>
                <CardHeader>
                    <CardTitle className='text-black'>{previewData.title}</CardTitle>
                    <CardDescription>{previewData.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {previewData.image && <img src={previewData.image} alt="Link Preview" className='w-full h-auto block' />}
                    <div className='absolute bottom-0 left-0 w-full h-full' style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0) 100%)' }}></div>
                </CardContent>
            </Card>
        </div>

    );
}

export default LinkPreview;