/*用来生成一个二叉树*/
function BST() {
    this.root = null;
    this.insert = insert;
}

/*用来生成一个节点*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function insert(val) {
    var n = new TreeNode(val, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (val < current.val) {
                current = current.left;//待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点
                if (current == null) {//如果当前节点的左节点为null，就将新的节点插入这个位置，退出循环；反之，继续执行下一次while循环。
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;//待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}


// 方法一：递归实现
// 中序遍历
// 打印顺序： 左 根 右
// 作用：用于排序一个数组，从小到大升序排列。
var inorderTraversal = function(root) {
    let res = []
    orderZhong(root, res);
    return res;
};

const orderZhong = function(root, res) {
    if(!root) return;
    orderZhong(root.left, res);
    res.push(root.val);    
    orderZhong(root.right, res);
}

// 前序遍历
// 打印顺序： 根 左 右
// 作用：复制一个已有的二叉树结构，性能是最高的。比重新创造一个新的二叉树的效率高十倍多。
var preorderTraversal = function(root) {
    let res = []
    orderQian(root, res);
    return res;
};

const orderQian = function(root, res) {
    if(!root) return;
    res.push(root.val);    
    orderQian(root.left, res);
    orderQian(root.right, res);
}

// 后序遍历
// 打印顺序： 左 右 根
// 作用：用于操作系统和文件系统的遍历上
var postorderTraversal = function(root) {
    let res = []
    orderHou(root, res);
    return res;
};

const orderHou = function(root, res) {
    if(!root) return;
    orderHou(root.left, res);
    orderHou(root.right, res);
    res.push(root.val);
}
