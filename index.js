// Import stylesheets
import './style.css';
import * as gcpdfviewer from '@grapecity/gcpdfviewer';

var viewer = new gcpdfviewer.GcPdfViewer('#pdfviewer', { /* Specify options here */ }
    );
    viewer.addDefaultPanels();
    viewer.open("./pdf/diodocs_a4_full.pdf");