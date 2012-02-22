#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;

void main(void)
{
    vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / u_resolution.xy;
    vec2 uv;
   
    float a = atan(p.y,p.x);
    float r = sqrt(dot(p,p));

    uv.x = r - .25*u_time;
    uv.y = cos(a*5.0 + 2.0*sin(u_time+7.0*r)) ;

    vec3 col =  (.5+.5*uv.y)*texture2D(u_tex0,uv).xyz;

    gl_FragColor = vec4(col,1.0);
}