import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Article {


    @PrimaryGeneratedColumn()

    id:number
    @Column()

    titel:number
    
    @Column()

   body:number




}
