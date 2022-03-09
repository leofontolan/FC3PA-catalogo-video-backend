import { Category } from "./category";
import {omit} from 'lodash';

describe("Category Unit Tests", () => {

  test("constructor of category", () => {
    


    //Teste passando apenas Nome
    let category = new Category({name: 'Movie'});
    let props = omit(category.props, 'created_at');
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });

    //Verificar se a variável tem um instacia de Date
    expect(category.props.created_at).toBeInstanceOf(Date);






    //Teste passando  Nome, Descrição, is_active e Data!
    category = new Category({
      name: 'Movie', 
      description: 'some description', 
      is_active: false,
    })
    //Criar uma Data para o teste
    let created_at = new Date();
    expect( category.props).toStrictEqual({
      name: "Movie",
      description: 'some description',
      is_active: false,
      created_at
    });






    // Passando apenas Nome e Descrição
    category = new Category({
      name: 'Movie', 
      description: 'other description', 
    })
    expect(category.props).toMatchObject({
      name: "Movie",
      description: 'other description',
    });





    // Passando apenas Nome e is_active
    category = new Category({
      name: 'Movie', 
      is_active: true, 
    })
    expect( category.props).toMatchObject({
      name: "Movie",
      is_active: true, 
    });



    

    // Passando apenas Nome e created_at
    created_at = new Date();
    category = new Category({
      name: 'Movie', 
      created_at, 
    })
    expect( category.props).toMatchObject({
      name: "Movie",
      created_at, 
    });
  });

});
