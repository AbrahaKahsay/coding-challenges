var inorderTraversal = function(root) {
    const result = [];
    
    const traverse = function(node) {
      if (!node) {
        return;
      }
      
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
    
    traverse(root);
    
    return result;
  };
  