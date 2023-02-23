import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()  title: string;
    @ApiProperty() description: string;
    @ApiProperty()  publisher: string;
    @ApiProperty()  publishedDate: Date;
}