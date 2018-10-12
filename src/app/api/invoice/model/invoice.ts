/**
 * Supply Chain Finance
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ProductDetails } from './productDetails';


export interface Invoice {
    nameOfSupplier?: string;
    invoiceDate?: Date;
    invoiceNumber?: string;
    manufacturer?: string;
    manufacturersAddress?: string;
    /**
     * Purchase Order Number
     */
    poNumber?: number;
    /**
     * Purchase Order date
     */
    poDate?: Date;
    challanNumber?: number;
    challanDate?: Date;
    productDetails?: Array<ProductDetails>;
    preparedBy?: string;
    designation?: string;
    status?: string;
}
