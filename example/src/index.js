import 'dotenv/config';
import { add } from '@myria/api-request-typescript';

function showResultSumOf(a, b) {
    return `@myria/api-request-typescript: Sum of ${a} + ${b} = ${add(a, b)} `;
}