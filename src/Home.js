import React, { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState([])

    const renderData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((postData) => {
            console.log(postData);
            setData(postData)
        });
    };

    useEffect(() => {
        renderData();
    }, []);

  return (
    <div>
        {data.map((items) => (
            <>
             <h5>AlbumID:{items.albumId}</h5>
             <h5>ID:{items.id}</h5>
             <h5>Title:{items.title}</h5>
             <h5>URL:{items.url}</h5>
             <h5>thumbnailUrl:{items.thumbnailUrl}</h5>

             </>
        
        )
           
        
        
        )}

    </div>
  )
}
