import { PDFViewer } from '@react-pdf/renderer';
import { PdfCv } from './components/PdfCv/index';


function App() {
  return (
     <PDFViewer style={{ width: '100%', height: '100vh' }}>
       <PdfCv />
      </PDFViewer>
  )
}

export default App
