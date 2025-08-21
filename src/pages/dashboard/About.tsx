import { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Button } from 'antd';
import { useGetAboutUsQuery, useUpdateAboutUsMutation } from '../../redux/features/rulesApi';
import toast from 'react-hot-toast';

const About = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const { data, refetch } = useGetAboutUsQuery({});
    const aboutContent = data?.data?.content;

    const [updateAboutUs] = useUpdateAboutUsMutation();

    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 500,
            background: 'white',
        },
    };

    const handleSubmit = async () => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = content;
        const plainText = tempElement.innerText.trim();

        if (!plainText) {
            toast.error('Content cannot be empty');
            return;
        }

        try {
            await updateAboutUs({
                content,
            }).unwrap();
            toast.success('Updated successfully!');
            refetch();
        } catch (err) {
            console.error('Update failed', err);
            toast.error('Failed to update');
        }
    };

    // Set content when data is fetched
    useEffect(() => {
        if (aboutContent) {
            setContent(aboutContent);
        }
    }, [aboutContent]);

    return (
        <div className=" bg-white px-4 py-2 rounded-lg pb-10 ">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '16px 0',
                }}
            >
                <div>
                    <h3 className="text-2xl text-primary font-semibold">About Us</h3>
                </div>
            </div>
            <div>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={() => {}}
                />
            </div>
            <div
                style={{
                    marginTop: 24,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button
                    onClick={handleSubmit}
                    style={{
                        height: 40,
                        width: '150px',
                    }}
                    type="primary"
                >
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default About;
