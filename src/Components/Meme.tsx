import React, { useEffect, useState } from 'react';

const subreddits = [
    'cleanmemes',
    'wholesomememes',
    'memes',
    'funny',
    'meme',
    'terriblefacebookmemes'
]

export default function Meme() {
    const [memeURL, setMemeURL] = useState('');
    const [memeTitle, setMemeTitle] = useState('');
    const [subredditNum, setSubredditNum] = useState(0);

    // getting the meme
    const getMeme = async() => {
        let subredditIndex:number = Math.floor(Math.random() * (subreddits.length - 0) + 0);
        fetch('https://meme-api.com/gimme/'+subreddits[subredditIndex]).then((response)=>response.json()).then(
            (data)=> {
                setMemeURL(data.url);
                setMemeTitle(data.title);
                setSubredditNum(subredditIndex);
            }
        );
    }

    useEffect(()=> {
        getMeme();
    },[]);

    return(
        <div className='mt-[50px] sm:mt-[50px] md:mt-[75px] lg:mt-[75px] h-[700px] mb-[50px]'>
            { memeURL !== '' ?
            <div>
                <div className='w-[400px] h-[200px] max-w-[70%] sm:max-w-[80%] md:max-w-[100%] max-h-[300px] h-[500px] sm:w-[400px] sm:h-[100%] md:w-[500px] lg:w-[550px] ml-auto mr-auto'>
                    <img src={memeURL} alt='' className='max-h-[500px] max-w-[100%] object-cover ml-auto mr-auto'/>
                    <h1 className='text-center mt-[20px] font-comic'>
                        <i className='text-wrap max-w-[80%] md:max-w-[100%]'>
                            <b>{memeTitle}</b><br/>
                            r/<a target="_blank" rel="noreferrer" href={"https://www.reddit.com/r/"+subreddits[subredditNum]}>{subreddits[subredditNum]}</a>
                        </i>
                    </h1>
                </div>
            </div>
            :
            <h1 className='text-center text-slate-red'>Image loading...</h1>
            }
        </div>
    );
}