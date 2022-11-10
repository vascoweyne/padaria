import { PartialType } from '@nestjs/mapped-types';
import { ProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(ProdutoDto) {
    
}
