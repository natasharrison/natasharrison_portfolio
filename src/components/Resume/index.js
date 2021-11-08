import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Resume(){

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            {/* <Document
            file="Resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document> */}
            <a href "https://docs.google.com/document/d/1wAeLwdceXf-gyBrSJFEzDKVKCNco6AbIzFc1QniDT-o/edit?usp=sharing"></a>
        </div>
    );
}


export default Resume; 