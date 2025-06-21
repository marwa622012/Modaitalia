import AccordionDescription from "../components/Description";

function MensWear() {
return (
    <div>
        <div className="row mx-5 my-5 all">
            <div className="container my-4">
                                            <AccordionDescription title="MenWear">
                                            Trend Book for Fashion Fabrics
                                            A versatile and forward-thinking guide to fabric trends, created to inspire both fabric manufacturers and garment producers. This edition explores innovative materials for trousers, dresses, jackets, and versatile separates, with a special focus on womenswear.
                                            It features a wide range of fabrics—from cotton blends to technical fibres, textured jacquards, and creative weaves—suitable for both sporty and city-inspired styles.
                                            Alongside fabric swatches and Pantone®-referenced colour trends, the book includes styling suggestions and garment concepts, offering complete inspiration from textile to finished product.
                                            An essential tool for those seeking direction in design, product development, or textile innovation.
                                            Published biannually. English edition with fabric inserts and styling visuals.
                                            </AccordionDescription>
                                        </div>
            {/* <h6 className='text-center mb-5 description'>Trend Book for Fashion Fabrics
A versatile and forward-thinking guide to fabric trends, created to inspire both fabric manufacturers and garment producers. This edition explores innovative materials for trousers, dresses, jackets, and versatile separates, with a special focus on womenswear.
It features a wide range of fabrics—from cotton blends to technical fibres, textured jacquards, and creative weaves—suitable for both sporty and city-inspired styles.
Alongside fabric swatches and Pantone®-referenced colour trends, the book includes styling suggestions and garment concepts, offering complete inspiration from textile to finished product.
An essential tool for those seeking direction in design, product development, or textile innovation.
Published biannually. English edition with fabric inserts and styling visuals.</h6> */}
            <div className="col-lg-3 col-md-6 mb-5 col-12 shirt-card">
                <img src={require('../images/men wear/1/nlmw2627.jpg')} alt="Mens Wear 1" className="shirt-image" />
            </div>
            <div className="col-lg-3 col-md-6 mb-5 col-12 shirt-card">
                <img src={require('../images/men wear/2/srm2627.jpg')} alt="Mens Wear 2" className="shirt-image" />
            </div>
            <div className="col-lg-3 col-md-6 mb-5 col-12 shirt-card">
                <img  src={require('../images/men wear/3/nlmw2026.jpg')} alt="Mens Wear 3" className="shirt-image" />
            </div>
            <div className="col-lg-3 col-md-6 mb-5 col-12 shirt-card">
                <img src={require('../images/men wear/4/srm2026.jpg')} alt="Mens Wear 4" className="shirt-image" />
            </div>
            <div className="col-lg-3 col-md-6 mb-5 col-12 shirt-card ">
                <img src={require('../images/men wear/5/srm2526.jpg')} alt="Mens Wear 4" className="shirt-image" />
            </div>
            <div className="col-lg-3 col-md-6 mb-5 col-12 shirt-card ">
                <img src={require('../images/men wear/6/nlmw2025.jpg')} alt="Mens Wear 4" className="shirt-image" />
            </div>
        </div>
    </div>
)
}
export default MensWear;
