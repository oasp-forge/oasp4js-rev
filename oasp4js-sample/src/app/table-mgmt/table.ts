export class Table {
	id: number;
	waiterId: String;
	state:String;
 
	modificationCounter: number;
	revision: any;
	number: number;

	constructor(id:number, waiterId:String, state:String){
		this.id = id;
		this.waiterId = waiterId;
		this.state = state;
	}
 
}
 //{"id":101,"modificationCounter":1,"revision":null,"waiterId":null,"number":1,"state":"OCCUPIED"}