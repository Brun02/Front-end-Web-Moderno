import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { ProductService } from './ProductService.js';

export default class DataTableContextMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProduct: null
        };

        this.menuModel = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.state.selectedProduct)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.state.selectedProduct)}
        ];

        this.productService = new ProductService();
        this.viewProduct = this.viewProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    viewProduct(product) {
        this.toast.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    deleteProduct(product) {
        let products = [...this.state.products];
        products = products.filter((p) => p.id !== product.id);

        this.toast.show({severity: 'error', summary: 'Product Deleted', detail: product.name});
        this.setState({ products });
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <ContextMenu model={this.menuModel} ref={el => this.cm = el} onHide={() => this.setState({ selectedProduct: null })}/>

                <div className="card">
                    <DataTable value={this.state.products} contextMenuSelection={this.state.selectedProduct}
                        onContextMenuSelectionChange={e => this.setState({ selectedProduct: e.value })}
                        onContextMenu={e => this.cm.show(e.originalEvent)} responsiveLayout="scroll">
                        <Column field="refeicao" header="Refeição"></Column>
                        <Column field="alimentos" header="Alimentos"></Column>
                        <Column field="carboidratos" header="Carboidratos"></Column>
                      <Column field="gorduras" header="Gorduras"></Column>
                      <Column field="proteinas" header="Proteínas"></Column>
                        <Column field="Ingestão" header="Ingestão Diária Recomendada" body={this.priceBodyTemplate} />
                      <Column field="gasto_calorico" header="Gasto Calórico"></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}