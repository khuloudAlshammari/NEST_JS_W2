import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Test {
    @PrimaryGeneratedColumn()

    id:number
    
    @Column()

    id_user:number
    
    @Column()
    followers :string
    
    @Column()
    follow :string
   
    



}
