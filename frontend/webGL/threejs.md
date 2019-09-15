# threejs 知识点
- 场景（scene）、相机（camera）、渲染器（renderer）
- 实时渲染、离线渲染
- 场景，相机，渲染器之间的关系
- Mesh模型(面的集合)、纹理
- x、y、z分量
- var point1 = new THREE.Vecotr3(x,y,z)
- point1.set(x,y,z);
- var geometry = new THREE.Geometry() 声明几何体
- var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } ) 定义材质
- var color1 = new THREE.Color( 0x444444 ) 定义颜色
- geometry.vertices.push(p1) 添加顶点
- geometry.colors.push( color1, color2 ) 添加颜色
- var line = new THREE.Line( geometry, material, THREE.LinePieces ) 定义线
- scene.add(line) 将线添加到场景中
- 右手坐标系
- 渲染循环 requestAnimationFrame
- 性能监视器Stats FPS、MS
- 动画引擎Tween.js
- TWEEN.update()
- 正投影相机THREE.OrthographicCamera和透视投影相机THREE.PerspectiveCamera
- OrthographicCamera( left, right, top, bottom, near, far )
- PerspectiveCamera( fov, aspect, near, far )
- 光源基类 THREE.light
- 环境光 THREE.AmbientLight( hex )
- 点光源 PointLight( color, intensity, distance )
- 聚光灯 THREE.SpotLight( hex, intensity, distance, angle, exponent )
- 区域光 THREE.AreaLight
- 方向光 THREE.DirectionalLight
- light.position.set(0, 0,50)
- 混合光源
- THREE.Texture( image, mapping, wrapS, wrapT, magFilter,
             minFilter, format, type, anisotropy ) 纹理
- 纹理坐标 右手坐标系
- geometry.vertices[0].uv = new THREE.Vector2(0,0); 顶点赋值顺序为逆时针
- var material = new THREE.MeshBasicMaterial({map:texture}) 将纹理应用于材质
- var mesh = new THREE.Mesh( geometry,material );
- scene.add( mesh )
- canvas作为纹理
- 动画作为纹理
- 模型、模型查看器
- Three.js支持很多种3D模型格式，例如ply，stl，obj，vtk等等
- Vtk模型是一种以文本方式表示的3D模型文件，其能够表示点面信息
- 加载vtk模型
- 将vtk文件中的点，转换为geometry的vertices数组中
- 将vtk文件中每个点的索引，转换到geometry的faces中
- geometry.computeCentroids() 面的重心
- geometry. computeFaceNormals () 面的法向量
- geometry. computeVertexNormals () geometry的一个椭圆，中心点就是geometry的中心
- 移动、旋转、放大缩小
- var geometry = new THREE.BoxGeometry( 100, 100, 100 );
- THREE.BoxGeometry = function ( width, height, depth, widthSegments, heightSegments, depthSegments )
- geometry中有一个face成员，用来存储这个Geometry包含的面。每个面(face)有一个color属性，表示这个面的颜色。
- var helper = new THREE.GridHelper( 1000, 50 ) 绘制网格
- 通过Mesh的rotation属性来旋转物体
- var rotation = new THREE.Euler()
- 通过rotateX、rotateY、rotateZ函数来旋转物体
- mesh.rotateY(0.01)
- 视口（viewport）
- 构造界面 canvas
- 初始化函数（判断浏览器是否支持webGL等）
- View（视图）类，用来封装相机，视图、灯光、等场景
- function View( canvas, fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight )
   - 初始化相机
   - setViewOffset 设置相机的有效显示部分
   - Render渲染函数

- HSL颜色空间 H(hue)色相，S(saturation)饱和度，以及L(lightness)亮度
- 色相环六大主色 360°/0°红、60°黄、120°绿、180°青、240°蓝、300°洋红
- three.js引擎中是不支持这种同时显示平面和线框的 —— 创建2个不同材质的相同物体，来近似的模拟这种效果
- 声明渲染器
  ```js
  renderer = new THREE.WebGLRenderer( { antialias: true } ); // 反锯齿
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( fullWidth, fullHeight );
  ```
- 总渲染函数

  ```js
  function animate() {
      for ( var i = 0; i < views.length; ++i ) {
          views[ i ].render();
      }
      requestAnimationFrame( animate );
  }
  ```

- 鼠标事件
  ```js
  document.addEventListener('mousemove', onDocumentMouseMove, false );
  ```

  - Geometry 或者 BufferGeometry。 （推荐使用BufferGeometry，因为它在性能上表现得会更好一些

  - BufferGeometry.dispose()
  - Material.dispose()
  - Texture.dispose()
  - WebGLRenderTarget.dispose()