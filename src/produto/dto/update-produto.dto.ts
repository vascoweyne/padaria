import { PartialType } from '@nestjs/swagger';
import { ProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(ProdutoDto) {
    
}
