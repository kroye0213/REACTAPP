import {useEffect, useState} from "react";

const useFetch = ( url ) => {
    // const[ books, setBooks ] = useState( null );
    const[ data, setData ] = useState( null );
    const [error, setError ] = useState(  null );
    const [ isPending, setIsPending] = useState(true);

    useEffect( () => {
        // let url = " http://localhost:8000/books";
        console.log("URL->" + url );
        const abortContr = new AbortController();
        // setTimeout( () => {
            fetch( url, { signal : abortContr.signal })
                .then(resp => {
                    // console.log( `resp->`); console.log( resp );
                    if ( !resp.ok){
                        throw Error("Cannot fetch URL data for resource")
                    }
                    return resp.json()
                }).
            then(data => {
                setIsPending( false );
                console.log( "data=>")
                console.log( data );
                // setBooks( data );
                setData( data );
                setError ( null );
            }).catch( (err) => {
                if ( err.name == 'AbortError'){
                    console.log( "Fetch Aborted->")
                    console.log( err.message );
                } else {
                    console.log("Error:");
                    console.log(err.message);
                    setIsPending(false);
                    setError(err.message);
                }
            })
        // }, 10)
        return () => {
            console.log( "Clean up");
            // Want to stop the fetch
            abortContr.abort();

        }
    }, [ url ] ); // Whenever URL changes rerun
    return { data, isPending, error}
}
export default useFetch;