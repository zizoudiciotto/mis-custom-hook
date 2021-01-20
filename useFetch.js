import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true);

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        
        //useState({data: null, loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if( isMounted.current )
                    {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }
                }, 50);
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'no se pudo cargar'
                })
            });
    }, [url]);

    return state;
};
