//搜索图书的功能
const searchBook=async (keyword, pageIndex, pageSize)=>{
    const query = `
    query test($keyword: String, $pageIndex: Int, $pageSize: Int) {
      getBook2(pageIndex: $pageIndex, pageSize: $pageSize, keyword: $keyword) {
        data {
          allBooks {
            id
            title
            cover
            price
            rest
            ISBN
            del
            tag
          }
          total
        }
        code
        msg
      }
    }
  `;

  // 构建变量
  const variables = {
    keyword: keyword,
    pageIndex: pageIndex,
    pageSize: pageSize
  };

  try {
    // 发送POST请求到GraphQL端点
    const res = await fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query, variables: variables }),
    });


    // 解析响应数据
    const data = await res.json();

    // 提取书籍信息
    const books = data.data.getBook2.data;
    console.log(data);
    
    // 返回书籍信息
    return books;
  } 
  catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}
const tagSearch=async (tag,pageIndex,pageSize)=>{
    const res=await fetch(`http://localhost:8080/graph/get?pageIndex=${pageIndex}&pageSize=${pageSize}&tag=${tag}`);
    const data=await res.json();
    const books=data.data;
    console.log("books:",books);
    
    return books
}
const getBookById=async (id)=>{
    const res=await fetch(`http://localhost:8081/ebook/book/detail?id=${id}`);
    const data=await res.json();
    const total=data.data;
    return total
}

const getAllBooks=async ()=>{
    const res= await fetch("http://localhost:8081/ebook/book/all");
    const data=await res.json();
    const total=data.data;
    return total;
}

// 管理员搜索关键词

const searchKey=async (keyword)=>{
    const res=await fetch(`http://localhost:8081/ebook/book/search?keyword=${keyword}`);
    const data= await res.json();
    const books=data.data;
    return books;
}


// 删除图书的功能（管理员使用）
const delBooks=async(id)=>{
    const res= await fetch(`http://localhost:8081/ebook/book/del?id=${id}`);
    const data= await res.json();
    return data.data;
}




export {searchBook,getBookById,getAllBooks,delBooks,searchKey,tagSearch}