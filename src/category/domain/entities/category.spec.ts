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


  //Testando o Get Name
  test('getter of name prop', ():void => {
    const category = new Category({name: 'Movie'});
    expect(category.name).toBe('Movie'); 
  })

  //Testando o Get e Set Description
  test('getter and setter description prop', ():void => {

    let category = new Category({name: 'Movie'});
    expect(category.description).toBeNull();
    
    category = new Category({name: 'Movie', description: 'some description'});
    expect(category.description).toBe('some description'); 

    category = new Category({name: 'Movie'});
    category["description"] = "other description";
    expect(category.description).toBe('other description'); 

    category["description"] = undefined;
    expect(category.description).toBeNull();

    category["description"] = null;
    expect(category.description).toBeNull();
    
  });


  //Testando o Get e Set is_active
  test('getter and setter of is_active prop', (): void =>{

    let category = new Category({name: 'Movie'});
    expect(category.is_active).toBeTruthy();

    category = new Category({name: 'Movie', is_active: true});
    expect(category.is_active).toBeTruthy();

    category = new Category({name: 'Movie', is_active: false});
    expect(category.is_active).toBeFalsy();

    category = new Category({name: 'Movie'});
    category["is_active"] = false;
    expect(category.is_active).toBeFalsy();

    category = new Category({name: 'Movie'});
    category["is_active"] = true;
    expect(category.is_active).toBeTruthy();
  });


  //Testando o Get created_at
  test('getter of created_at prop', ():void => {

    let category = new Category({name: 'Movie'});
    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({name: 'Movie', created_at});
    expect(category.created_at).toBe(created_at);
  });

});