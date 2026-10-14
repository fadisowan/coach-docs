export default function tableRegions() {
  return tree=>{
    function walk(parent) {
      if(!parent.children)return;
      parent.children=parent.children.map(child=>{
        walk(child);
        return child.type==='element'&&child.tagName==='table'?{type:'element',tagName:'div',properties:{className:['table-scroll'],tabIndex:0,role:'region',ariaLabel:'جدول الإعدادات والمعاينات'},children:[child]}:child;
      });
    }
    walk(tree);
  };
}
